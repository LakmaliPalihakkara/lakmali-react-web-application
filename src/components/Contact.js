import { useState } from "react";
import { useForm } from "react-hook-form";

export function Contact() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <form className="form" onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <select {...register("category", { required: true })}>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Dr">Dr</option>
      </select>
      <input {...register("firstName")} placeholder="Enter First name" />
      <input {...register("lastName")} placeholder="Enter Last name" />
      <input {...register("email")} placeholder="Enter Email Address" />
      <input {...register("phone")} placeholder="Enter Contact Number" />
      
      <textarea {...register("message")} placeholder="Enter your message" />
      <p>{data}</p>
      <input type="submit" />
    </form>
  );
}

export default Contact;