import React from "react";
import { Button } from "react-bootstrap";



export default class Styled extends React.Component {

    render() {
        return(
            <div>
                <table border={0} width={'100%'} style= {{height: '500px', backgroundImage: 'url("https://kominfo.cilacapkab.go.id/wp-content/uploads/2020/01/background-biru-kece-scaled.jpg")'}} >
                    <tbody>
                        <tr>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <center>
                                <h5>Student Eduwork</h5>
                                <h2>Muhammad Hudzaifah</h2>
                                <br />
                                <br />
                                <Button variant="primary">Linkedin Profile</Button>
                                </center>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                    </tbody>
                </table>

                <table width={'100%'}>
                    <tbody>
                        <tr>
                            <td>
                                <h1>
                                    <center>MY BIO</center>
                                </h1>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p style={{textAlign: "justify"}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                                obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                                nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                                tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                                quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
                                sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                                recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
                                minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
                                quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
                                consequuntur! Commodi minima excepturi repudiandae velit hic maxime
                                doloremque. Quaerat provident commodi consectetur veniam similique ad 
                                earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
                                fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
                                suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
                                modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
                                totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
                                quasi aliquam eligendi, placeat qui corporis!
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}