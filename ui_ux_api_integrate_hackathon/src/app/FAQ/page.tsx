import React from 'react'
import FaqQuestions from '../components/faqQuestions'

const FAQ = () => {
    let descriptions = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
    let faqQues = [
    {
        heading: "What types of chairs do you offer?",
        desc: descriptions
    },
    {
        heading: "How can we get in touch with you?",
        desc: descriptions
    },
    {
        heading: "Do your chairs come with a warranty?",
        desc: descriptions
    },
    {
        heading: "What will be delivered? And When?",
        desc: descriptions
    },
    {
        heading: "Can I try a chair before purchasing?",
        desc: descriptions
    },
    {
        heading: "How do I clean and maintain my Comforty chair?",
        desc: descriptions
    }
]
    // make array and run faqQues 8 times

  return (
    <div className='mt-10 mb-20'>
        <section className='flex justify-center'>
            <div className='w-[70vw] text-center'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl pb-8 font-bold'>Questions Looks Here</h1>
                <p className='text-[#4F4F4F]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
            </div>
        </section>
        <section className='flex justify-center mt-40'>
            <section className='w-[90vw] grid gap-20 sm:w-[85vw] md:w-[80vw] lg:w-[75vw] '>
                <section className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    {faqQues.map((item) => (
                        <FaqQuestions head={item.heading} desc={item.desc}/>
                    ))}
                </section>
            </section>
        </section>
    </div>
  )
}

export default FAQ