import React from "react";
import * as Validator from 'validatorjs';
const Input = ({label, type, name, onChange,}) => {
    return(
        <div>
            <label>
            {label}: 
            <br />
            <input type={type} name={name} onChange={e => onChange(e.target.value)}/>
            </label>
            <br />
        </div>
    )
}


const ShowErrors = ({errors}) =>{
    return(
        <ul style={{color: 'red', marginLeft: '-20px'}}>
            {
                errors.map((error, i) => <li key={i}>{error}</li>)
            }
        </ul>
    )
}

export default class Validation extends React.Component{
    state={

        email:'',
        password:'',
        errors: []
    }

    handleSubmit = event =>{

        
        event.preventDefault();
        const {email, password} = this.state;

        let data = { email, password };
          
        let rules = {
            email: 'required|email',
            password: 'min:8|required'
        };

        let validation = new Validator(data, rules)
        validation.passes();
        this.setState({
            errors:[
                ...validation.errors.get('email'),
                ...validation.errors.get('password')
            ]
        })

        alert(`
        nama: ${this.state.name}
        email: ${this.state.email}
        password: ${this.state.password}
        jurusan: ${this.state.jurusan}
        alamat: ${this.state.alamat}
        gender: ${this.state.gender}
        
        
        `)
}

    render(){

        const edit ={
            marginLeft:'20%',
            marginTop:'5%'
        }
        const style ={
            width: '400px',
            margin: '200px',
            border: '1px solid black',
            padding: '10px'

        }

        return(
            <div style={edit}> 
                <div style={style}>
                    {
                        this.state.errors && <ShowErrors errors={this.state.errors} />
                    }
                    <h4>Form Registrasi</h4>
                    <form onSubmit={this.handleSubmit}>
                        <Input type="name" name="name" label="Nama" 
                            onChange={value => this.setState({name: value})}/>
                        <Input type="email" name="email" label="Email" 
                            onChange={value => this.setState({email: value})}/>
                        <Input type="password" name="password" label="Password" 
                            onChange={value => this.setState({password: value})}/>
                        Jurusan:
                        <br />
                        <select type="text" name="jurusan"
                            onChange={e => this.setState({jurusan: e.target.value})}>
                            <option value="">Pilih Jurusan</option>
                            <option value="Teknik Geologi">Teknik Geologi</option>
                            <option value="Teknik Industri">Teknik Industri</option>
                            <option value="Teknik Metalurgi">Teknik Metalurgi</option>
                            <option value="Teknik Geofisika">Teknik Geofisika</option>
                            </select>
                        <br />
                        Alamat:
                        <br />
                        <textarea cols="30" rows="10" name="alamat" 
                            onChange={e => this.setState({alamat: e.target.value})}/>
                         <label>
                        <br />
                        Jenis Kelamin:
                        <br /> 
                            <input type="radio" value="Laki laki" name="gender" 
                                onChange={e => this.setState({gender: e.target.value})}/> Laki laki
                            <input type="radio" value="Perempuan" name="gender" 
                                onChange={e => this.setState({gender: e.target.value})}/> Perempuan
                        </label>
                        <br />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            
        )
    }
}