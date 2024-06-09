import React from 'react'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5e7550e0-e4ab-4289-976d-b12957acc8a3");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert(res.message)
    }
  };

  return (
    <div className='w-full flex items-center flex-col justify-center px-7 py-3   ' id="contact">
        <h1 className='text-2xl font-medium xl:text-3xl xl:font-semibold mt-5 mb-3 '>Get in touch</h1>
       <div className='flex w-[100%] '>
       <div className='w-[45%] h-[35vh] border-r-[3px] border-zinc-500 xl:flex flex-col items-center justify-center'>
            <h1 className='text-xl font-medium mb-3'>Let's talk</h1>
<h2 className='text-xs xl:text-lg  font-normal mb-2'>
    <span className='text-lg mr-1 xl:text-lg'><i class="ri-mail-line"></i></span>
vs27577@gmail.com
</h2>
<h2 className='text-xs font-normal mb-2 xl:text-lg'>
    <span className='text-lg mr-1 xl:text-lg'><i class="ri-phone-fill"></i></span>
    +918516073584
</h2>
<h2 className='text-xs font-normal mb-2 xl:text-lg'>
    <span className='text-lg mr-1 xl:text-lg'><i class="ri-map-pin-2-fill"></i></span>
    Gwalior,M.P
</h2>

       </div>
        <div className='w-[55%] h-[40vh] flex items-center flex-col  '>
          <form onSubmit={onSubmit}>
          <input className='h-[8vh] p-2 outline-none bg-blue-200 w-[90%] mb-2' type="text" placeholder='name'name="name" />
<input className='h-[8vh] p-2 outline-none bg-blue-200 w-[90%] mb-2' type="email" placeholder='email' name="email" />
<textarea className='h-[15vh] w-[90%] p-2 outline-none bg-blue-200 resize-none' placeholder="enter your message" id=""name='details' ></textarea>

<button type="submit" className='text-sm font-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  rounded-full px-6 py-3 mt-2 '>Submit</button>

          </form>
           
        </div>
       </div>


    </div>
  )
}

export default Contact