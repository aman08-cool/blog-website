import React from 'react'

import { useForm, SubmitHandler } from "react-hook-form"
import { useState } from 'react';
import { useSession } from 'next-auth/react';

interface CommentProps
{
  postId: string;
}

type Inputs = {
  _id: string;
  name: string;
  email: string;
  comment: string;
}

function comment({ postId }: CommentProps)
{
  const { data: session } = useSession();
  const [userErr, setUserErr] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();


  const onSubmit: SubmitHandler<Inputs> = (data) =>
  {
    fetch("/api/createComment", {
      method: "POST",
      body: JSON.stringify(data),
    }).then(() =>
    {
      setSubmitted(true);
    }).catch((err) =>
    {
      setSubmitted(false);
    })
  }
  const handleUserErr = () =>
  {
    if (!session) {
      setUserErr("Please Sign In to Comment")
    }
    else {
      setUserErr("");
    }
  }


  return (
    <div>
      {submitted ? (
        <div className="flex flex-col items-center gap-2 p-10 my-10 bg-bgColor text-white mx-auto">
          <h1 className="text-2x1 font-bold">
            Thank you for submitting your comment!
          </h1>
          <p>Once it has been approved, it will appear below!</p>
        </div>
      ) : (
        <>
          <p className='text-xs text-secondaryColor uppercase font-titleFont font-bold'>Enjoyed this Article ?</p>
          <h3 className='font-titleFont text-3xl font-bold' >
            Leave a Comment below !
          </h3>
          <hr className='py-3 mt-2' />
          <input {...register("_id")}
            type="hidden"
            name="_id"
            value={postId}
          />
          <form onSubmit={handleSubmit(onSubmit)} className='mt-7 flex flex-col gap-6' action="">
            <label className='flex flex-col' htmlFor="">
              <span className='font-titleFont font-semibold text-base'>
                Name
              </span>
              <input
                {...register("name", { required: true })}
                className='text-base placeholder:text-sm border-b-[1px] border-secondaryColor py-1 px-4 outline-none focus-within:shadow-xl shadow-secondaryColor'
                type="text"
                placeholder='Enter Your Name'
              />
              {/* Error for Name */}
              {errors.name && (
                <p className='text-sm font-titleFont font-semibold text-red-500 my-1 px-4'>
                  <span className='text-base font-bold italic mr-2'>!</span>
                  Name is required!
                </p>
              )}
            </label>
            <label className='flex flex-col' htmlFor="">
              <span className='font-titleFont font-semibold text-base'>
                Email
              </span>
              <input
                {...register("email", { required: true })}
                className='text-base placeholder:text-sm border-b-[1px] border-secondaryColor py-1 px-4 outline-none focus-within:shadow-xl shadow-secondaryColor'
                type="text"
                placeholder='Enter Your E-mail'
              />
              {errors.name && (
                <p className='text-sm font-titleFont font-semibold text-red-500 my-1 px-4'>
                  <span className='text-base font-bold italic mr-2'>!</span>
                  Email is required!
                </p>
              )}
            </label>
            <label className='flex flex-col' htmlFor="">
              <span className='font-titleFont font-semibold text-base'>
                Comment
              </span>
              <textarea
                {...register("comment", { required: true })}
                className='text-base placeholder:text-sm border-b-[1px] border-secondaryColor py-1 px-4 outline-none focus-within:shadow-xl shadow-secondaryColor'
                placeholder='What do you think about this article ?'
                rows={6}
              />
              {errors.name && (
                <p className='text-sm font-titleFont font-semibold text-red-500 my-1 px-4'>
                  <span className='text-base font-bold italic mr-2'>!</span>
                  Please comment it is required!
                </p>
              )}
            </label>
            {session && (
              <button className='w-full bg-bgColor text-white text-base font-titleFont font-semibold tracking-wider uppercase py-2 rounded hover:bg-secondaryColor duration-300 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]' type='submit'>
                Submit
              </button>
            )}
          </form>
          {!session && (
            <button onClick={handleUserErr} className='w-full bg-secondaryColor test-white text-base font-titleFont font-semibold tracking-wider uppercase py-2 rounded hover:bg-secondaryColor duration-300 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]' type='submit'>
              Submit
            </button>
          )}
          {userErr && (
            <p className='text-sm font-titleFont text-center font-semibold text-red-500 underline underline-offset-2 my-1 px-4 animate-bounce'>{" "}
              <span className='text-base font-bold italic mr-2'>!</span>
              {userErr}
            </p>
          )
          }
        </>)}
    </div>
  )
}

export default comment