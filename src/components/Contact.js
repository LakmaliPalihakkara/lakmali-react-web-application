import { useState } from "react";
import { useForm } from "react-hook-form";

export function Contact() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <div>
    <h1 style={{color: "#DFF6FF",marginTop:"25px", marginBottom:"-40px"}}>Contact Us</h1>

    <form className="form" onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <select {...register("category", { required: true })}>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Dr">Dr</option>
      </select>
      <input className="input" {...register("firstName")} placeholder="Enter First name" />
      <input className="input" {...register("lastName")} placeholder="Enter Last name" />
      <input className="input"{...register("email")} placeholder="Enter Email Address" />
      <input className="input" {...register("phone")} placeholder="Enter Contact Number" />
      
      <textarea {...register("message")} placeholder="Enter your message" />
      <p>{data}</p>
      <input type="submit" />
    </form>
    </div>
  );
}

export default Contact;