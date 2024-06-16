import Image from "next/image"
import { PEOPLE_URL } from "@/app/constant"

interface CampProps{
  backgroundImage:string
  title:string
  subtitle:string 
  peopleJoined:string
}


const Campsite=({backgroundImage,title,subtitle,peopleJoined}:CampProps)=>{
  return(
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat` }>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-5 lg:py-10 ">
       <div className="flex-center gap-4">
        <div className=" flex rounded-full bg-cyan-900 p-4">
         <Image src="/custom/dimg2.jpg"
         alt="map"
         width={60}
         height={28}
         className="rounded-full"
         />
          <div className="flex flex-col ml-3 gap-1">
          <h4 className=" text-white">{title}</h4>
           <p className="text-white">{subtitle}</p>
        </div>
        </div>
       </div>
       <div className="flex-center gap-6">
       <span className="flex -space-x-4 overflow-hidden">
        {PEOPLE_URL.map((url)=>(
          <Image
          className="inline-block h-10 w-10 rounded-full"
          src={url}
          key={url}
          alt="person"
          width={52}
          height={52}
          />
        ))}
       </span>
       <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
       </div>
      </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className=' 2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
   <Campsite
    backgroundImage="bg-bg-img-1"
    title="Recent Technologies Growth"
    subtitle="AI, Machine Learning, IoT"
    peopleJoined="500M+ Explored"
    />
   <Campsite
    backgroundImage="bg-bg-img-2"
    title="Future Trends"
    subtitle="Blockchain, Quantum Computing"
    peopleJoined="400M+ Explored"
   />
      </div>
     <div className="flex justify-end mt-10 px-6 lg:-mt-60 lg:mr-6">
  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl shadow-lg">
    <h2 className="text-3xl md:text-4xl font-extrabold text-white">
      Exploring Future Technologies And Their Impact
    </h2>
    <p className="text-lg md:text-xl mt-5 text-gray-200 leading-relaxed">
      Stay ahead with the latest advancements in AI, machine learning, IoT, blockchain, and quantum computing. Explore how these technologies are reshaping industries and creating new opportunities.
    </p>
    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full pointer-events-none"></div>
    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full pointer-events-none"></div>
  </div>
</div>

    </section>
  )
}

export default Camp