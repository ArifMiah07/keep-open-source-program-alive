import { useState } from "react";
import { Helmet } from "react-helmet-async";


const Massage = () => {

    const [feedback, setFeedback] = useState([]);
    const [img, setImg] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();

        
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const time = form.time.value;
        const location = form.location.value;
        const profession = form.profession.value;
        const massage = form.massage.value;
        const submit = form.submit.value;
        const imgLink = form.imgUrl.value;

        const submitInfo = {
            name,
            date, 
            time,
            location,
            profession,
            massage,
            imgLink,
            submit
        }
        setImg(imgLink);
        setFeedback(submitInfo);
        form.reset();
        console.log(submitInfo,'clicked');
    }
    return (
        <div className=" shadow-lg drop-shadow-xl p-6">
            <Helmet>
                <title>Keep Open Source Alive</title>
                <meta title="keep-open-source-alive" />
                <meta name="keep open source alive" />
                <meta name="make open source alive" />
                <meta name="description" content="Keep Open Source Alive - An open-source project aimed at keeping other open-source projects alive and maintained." />
                <meta name="keywords" content="open source, keep open source alive, maintain open source projects" />
                <meta name="author" content="Arif Miah" />
                <meta property="og:title" content="Keep Open Source Alive" />
                <meta property="og:title" content="Make Open Source Alive" />
                <meta property="og:description" content="An open-source project aimed at keeping other open-source projects alive and maintained." />
                <meta property="og:image" content="https://keep-open-source-alive.web.app/keep-open-source-alive-image.jpg" />
                <meta property="og:url" content="https://keep-open-source-alive.web.app" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Keep Open Source Alive" />
                <meta name="twitter:description" content="An open-source project aimed at keeping other open-source projects alive and maintained." />
                <meta name="twitter:image" content="https://keep-open-source-alive.web.app/keep-open-source-alive-image.jpg" />
            </Helmet>
            <form onSubmit={handleSubmit} className="bg-gray-50 hover:bg-slate-200 p-6 ">
                <div className="w-full items-center flex flex-col ">
                    <input required className="w-full lg:w-10/12  p-3 bg-[#e6e6e6] rounded-lg  outline-none border border-gray-800  " type="text" name="name" placeholder="Your Name" />
                    <input required className="w-full lg:w-10/12  p-3 bg-[#bbc] rounded-lg  outline-none border border-gray-800  " type="date" name="date" placeholder="Date" />
                    <input required className="w-full lg:w-10/12  p-3 bg-[#ccb] rounded-lg  outline-none border border-gray-800  " type="time" name="time" placeholder="Time" />
                    <input required className="w-full lg:w-10/12  p-3 bg-[#ddb] rounded-lg  outline-none border border-gray-800  " type="text" name="location" placeholder="Your Country" />
                    <input required className="w-full lg:w-10/12  p-3 bg-[#ffd] rounded-lg  outline-none border border-gray-800  " type="text" name="profession" placeholder="Your Profession" />
                    <input className="w-full lg:w-10/12  p-3 bg-[#ffe] rounded-lg  outline-none border border-gray-800  "  type="text" name="imgUrl" placeholder="Image Url" />
                    <div className="w-full rounded-lg  ">
                        <textarea name="massage" defaultValue={'Nice work!😍'} id="" className="bg-[#afd]  rounded-lg outline-none border border-gray-800 p-6 w-full md:w-full lg:w-full"  rows="7" placeholder="Please Write Your Comment/Opinions/Advice/Suggestions Here "></textarea>
                    </div>
                    <input className="btn" type="submit" name="submit" value={"Submit You Comment"} placeholder="Submit You Comment" />
                </div>
{/* massage */}
            </form>
            <div className="sha flex flex-col border border-gray-600 p-3">

                <div className="w-full flex flex-col flex-wrap md:flex md:flex-row lg:flex lg:flex-row justify-between ">
                    <div className="w-full md:w-1/3 lg:w-1/3 flex items-center justify-center ">
                        <div className="  flex justify-center items-center row-span-2 w-[100px] h-[100px] rounded-full">
                            <img className="rounded-full w-fit h-fit" src={img} alt="" />
                        </div>
                    </div>
                    <div className="p-2 w-full md:w-1/3 lg:w-1/3 h-[108px] flex flex-col justify-betweenS  ">
                        <div className="p-3  text-wrap h-[54px] overflow-y-scrollS  ">
                            <p>{feedback.name}</p>
                        </div>
                        <div className="p-3 text-wrap h-[54px] flex flex-col justify-between overflow-y-scrollS  ">
                            <p>{feedback.date}</p>
                            <div className=" ">
                                <p>{feedback.time}</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-1/3 h-[108px] p-2 flex flex-col justify-betweenS ">
                        <div className="p-3 text-wrap h-[54px] overflow-y-scrollS  ">
                            <p>{feedback.profession}</p>
                        </div>
                        <div className="p-3 text-wrap h-[54px] overflow-y-scrollS ">
                            <p>{feedback.location}</p>
                        </div>
                    </div>
                </div>

                <div className="overflow-y-scroll text-wrap p-3  h-[200px]S col-start-1  ">
                    <p>{feedback.massage}</p>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Massage;