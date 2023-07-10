import React from "react";
import { Card } from "flowbite-react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { MdMail } from "react-icons/md";
export default function Contact() {
  return (
    <div className="flex flex-wrap items-center justify-center p-20">
      <div className="border border-black p-20 m-5">
        <span className="flex justify-center">LinkedIn</span>
        <a href="#" mailto alt="A link to Thomas Johnson's LinkedIn page">
          <BsLinkedin size="4em"></BsLinkedin>
        </a>
      </div>
      <div className="border border-black p-20 m-5">
        <span className="flex justify-center">Github</span>
        <a href="#" alt="A link to Thomas Johnson's github page">
          <BsGithub size="4em"></BsGithub>
        </a>
      </div>
      <div className="border border-black p-20 m-5">
        <span className="flex justify-center">Gmail</span>
        <a
          href="mailto: thomasjjohnson9311@gmail.com"
          alt="A link to send Thomas Johnson an email"
        >
          <MdMail size="4em"></MdMail>
        </a>
      </div>
      {/* <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border border-primary">
        <div className="card-body">
          <h1 className="text-1xl mb-4">
            Please submit this form below to leave us a message!
          </h1>
          <form onSubmit>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder=""
                className="input input-bordered"
                value
                onChange={(event) => event.target.value}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder=""
                className="input input-bordered"
                value
                onChange={(event) => event.target.value}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                placeholder=""
                className="input input-bordered"
                value
                onChange={(event) => event.target.value}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                placeholder=""
                className="textarea textarea-bordered"
                value
                onChange={(event) => event.target.value}
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div> */}
    </div>
  );
}
