import Image from "next/image";
import getCoworkingspace from "@/libs/getCoworkingspace";

export default async function Coworkingspace({params}:{params:{cid:string}}) {
    
    const coworkingspaceDetail = await getCoworkingspace(params.cid)

    return(
        <main className="text-center p-5 text-black">
            <h1 className="text-lg font-medium">{coworkingspaceDetail.data.model}</h1>
            <div className="flex flex-col md:flex-row my-5">
                <div className="md:w-[40%]">
                    <Image src={coworkingspaceDetail.data.picture} alt='Coworkingspace Image'
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg w-[100%]"/>
                </div>
                <div className="md:w-[70%] md:flex-row space-y-4 md:space-y-0 md:space-x-4 bg-gray-200 text-black-600 border border-gray-600
                m-5 p-10 shadow-xl">
                    <div className="text-md mx-5 text-left text-2xl">{coworkingspaceDetail.data.name}</div>
                    <br/>
                    <div className="text-md mx-5 text-left">Address: {coworkingspaceDetail.data.address}</div>
                    <div className="text-md mx-5 text-left">District: {coworkingspaceDetail.data.district}</div>
                    <div className="text-md mx-5 text-left">Province: {coworkingspaceDetail.data.province}</div>
                    <div className="text-md mx-5 text-left">Postalcode: {coworkingspaceDetail.data.postalcode}</div>
                    <div className="text-md mx-5 text-left">Telephone_number: {coworkingspaceDetail.data.telephone_number}</div>
                    <div className="text-md mx-5 text-left">Opentime: {coworkingspaceDetail.data.opentime}</div>
                    <div className="text-md mx-5 text-left">Cpentime: {coworkingspaceDetail.data.closetime}</div>
                </div>
            </div>
        </main>
    )
}
