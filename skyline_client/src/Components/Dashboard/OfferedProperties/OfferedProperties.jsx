import { useEffect, useState } from "react";
import { axiosSecure } from "../../../CustomHook/AxiosSecure";
import OfferedDataTable from "./OfferedDataTable";

function OfferedProperties() {
    const [properties, setProperties] = useState(null)
    useEffect(() => {
        axiosSecure.get('/alloffered')
            .then(e => {
                setProperties(e.data)
            })
            .catch(e => console.log(e.message))
    }, [])
    return (
        <>
            <div>
                {
                    properties ?
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>List</th>
                                        <th>Title</th>
                                        <th>Location</th>
                                        <th>Email</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Accept</th>
                                        <th>Reject</th>
                                    </tr>
                                </thead>
                                {/* row 1 */}
                                <tbody>{
                                    properties.map((d,index )=> <OfferedDataTable index={index} d={d} key={d._id}></OfferedDataTable>)
                                }
                                </tbody>
                            </table>
                        </div>
                        :
                        <span className=" w-full h-screen flex justify-center"><span className=" self-center loading loading-bars loading-lg"></span></span>
                }
            </div>
        </>
    );
}

export default OfferedProperties;