"use client";

import type React from "react";

import { useState } from "react";
import { Send } from "lucide-react";
import CustomNavbar from "../components/common/CustomNavbar";
import { AuthData } from "../core/constants/mock/AuthData";

const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    // Reset submission status after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <CustomNavbar title={AuthData[0].title} />
        <div className="divider"></div>
        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          {/* About Us Section */}
          <section id="about" className="py-12">
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-3xl mb-6">About Us</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="mb-4">
                      Welcome to our company! We are a dedicated team of
                      professionals committed to delivering high-quality
                      solutions to our clients.
                    </p>
                    <p className="mb-4">
                      Founded in 2020, our company has grown from a small
                      startup to a thriving business with clients across the
                      globe. Our mission is to provide innovative solutions that
                      help our clients achieve their goals.
                    </p>
                    <p>
                      Our team consists of experts in various fields, including
                      design, development, marketing, and customer support. We
                      work together to ensure that every project we undertake is
                      completed to the highest standards.
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="stats shadow">
                      <div className="stat">
                        <div className="stat-figure text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block w-8 h-8 stroke-current"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            ></path>
                          </svg>
                        </div>
                        <div className="stat-title">Happy Clients</div>
                        <div className="stat-value text-primary">500+</div>
                        <div className="stat-desc">Since 2020</div>
                      </div>

                      <div className="stat">
                        <div className="stat-figure text-secondary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block w-8 h-8 stroke-current"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            ></path>
                          </svg>
                        </div>
                        <div className="stat-title">Projects Completed</div>
                        <div className="stat-value text-secondary">1,200</div>
                        <div className="stat-desc">
                          ↗︎ 40% more than last year
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Us Section */}
          <section id="contact" className="py-12">
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-3xl mb-6">Contact Us</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                    <p className="mb-4">
                      We'd love to hear from you! Whether you have a question
                      about our services, need help with a project, or just want
                      to say hello, we're here to help.
                    </p>
                    <div className="space-y-2">
                      <p>
                        <strong>Address:</strong> 123 Business Street, Tech
                        City, TC 12345
                      </p>
                      <p>
                        <strong>Email:</strong> info@yourcompany.com
                      </p>
                      <p>
                        <strong>Phone:</strong> (123) 456-7890
                      </p>
                    </div>
                    <div className="mt-6">
                      <h4 className="font-medium mb-2">Business Hours:</h4>
                      <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p>Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Send Us a Message
                    </h3>
                    {isSubmitted ? (
                      <div className="alert alert-success">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="stroke-current shrink-0 h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>Your message has been sent successfully!</span>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Name</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className="input input-bordered"
                            required
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Email</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your email"
                            className="input input-bordered"
                            required
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Message</span>
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="textarea textarea-bordered h-24"
                            placeholder="Your message"
                            required
                          ></textarea>
                        </div>
                        <div className="form-control mt-6">
                          <button type="submit" className="btn btn-primary">
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default About;
