import { ConstraintViolationError } from "objection"
import DataProvider, { DataContext } from "../context/DataContext"
import Card from "./Card"
import Container from "./Container"
import { useContext, useEffect, useState } from "react"

const Main = () => {

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //           const response = await fetch("./src/assets/stays.json");
    //           const jsonData = await response.json();
    //           setData(jsonData);
    //         } catch (error) {
    //           console.error("Error fetching data:", error);
    //         }
    //       };

    //       fetchData();
    // }, [])

    // console.log(data)

    const { data } = useContext(DataContext)
     console.log(data)
    return (
        <div className="main">

                <Container>
                   {
                    data.map((card,index)=><Card key={index} {...card} />)
                    // console.log(data)
                   }
                </Container>

        </div >
    )
}

export default Main;
