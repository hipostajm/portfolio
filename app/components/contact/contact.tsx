import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form"
import {z} from 'zod'
import api from "../../api"
import "./contact.scss"
import { useState } from "react";

const schema = z.object({
  name: z.string().optional(),
  email: z.email().or(z.literal("")).optional(),
  discord: z.string().min(2, "Minimum 2 znaki")
  .max(32, "Maksimum 32 znaki")
  .regex(
    /^(?!.*\.\.)[a-z0-9][a-z0-9_.]*[a-z0-9]$|^[a-z0-9]$/,
    "Tylko małe litery, cyfry, podkreślenie i pojedyncze kropki; 2–32 znaki"
  ).optional().or(z.literal("")),
  message: z.string().nonempty("the message must containt content")
})

type FormFields = z.infer<typeof schema>;

export default function Contact(){
  const { mutate, isPending} = useMutation({
    mutationFn: (data: FormFields) => {return api.sendMessage(data)},
    onError: (err) => setError("root",{type: "custom", message: err.message}),
  })
  
  const form = useForm<FormFields>({resolver: zodResolver(schema)})
  const {register, handleSubmit,reset, formState: {errors, isSubmitSuccessful}, setError} = form



  const onSubmit: SubmitHandler<FormFields> = (data) =>{
    mutate(data)
    reset()
  }

  return (
    <>
    <h1>Contact me!</h1>

    <form onSubmit={handleSubmit(onSubmit)} className="m-auto flex flex-col md:w-[400px] gap-[1rem] border-black border-solid border-2 p-10 items-center">

      {isPending && <div className="p-4 w-fit flex gap-3">
        <div className="animate-spin flex items-center justify-center" >|</div>
        Sending...
        </div>}

      <input {...register("name")} type="text" placeholder="name" className="input"/>
      {errors.name && <span className="error">{errors.name.message}</span>}

      <input {...register("email")} type="email" placeholder="e-mail" className="input"/>
      {errors.email && <span className="error">{errors.email.message}</span>}

      <input {...register("discord")} type="text" placeholder="discord" className="input"/>
      {errors.discord && <span className="error">{errors.discord.message}</span>}

      <textarea  {...register("message", {
        required: "Message is required!",
      })} placeholder="message" rows={5} className="input before:content-['*'] before:text-red-500" >
      </textarea>
      {errors.message && <span className="error">{errors.message.message}</span>}

      <button type="submit" className="hover:cursor-pointer mt-4" >Submit</button>

      {errors.root && <span className="error">{errors.root.message}</span>}

    </form>
    </>
  )
}
