import React from "react";

export default class FormElement extends React.Component{
state={
    nama:'',
    jurusan:'',
    gender:'',
    alamat:'',
    member:false
}

handleSubmit = () => {
    alert(`
        nama: ${this.state.nama}
        jurusan: ${this.state.jurusan}
        gender: ${this.state.gender}
        alamat: ${this.state.alamat}
        member: ${this.state.member ? 'YES' : 'NO'}
    `)
}

    render(){
        return(
            <div style={{padding:'50px', marginLeft:'35%', marginTop:'8%'}}>
                <form onSubmit={this.handleSubmit}> 
                    <label> 
                        Nama: <input 
                        type="text" 
                        name="nama" 
                        onChange={ e => this.setState({nama: e.target.value}, () => console.log(this.state))}/>
                    </label>
                    <br />
                    <label>
                        Jurusan: <select 
                        name="jurusan" 
                        onChange={e => this.setState({jurusan: e.target.value}, () => console.log(this.state))}>
                            <option value="">Pilih Jurusan</option>
                            <option value="Teknik Geologi">Teknik Geologi</option>
                            <option value="Teknik Industri">Teknik Industri</option>
                            <option value="Teknik Metalurgi">Teknik Metalurgi</option>
                            <option value="Teknik Geofisika">Teknik Geofisika</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        Jenis Kelamin: 
                        <input type="radio" value="Laki laki" name="gender" 
                        onChange={e => this.setState({gender: e.target.value}, () => console.log(this.state))}/> Laki laki
                        <input type="radio" value="Perempuan" name="gender" 
                        onChange={e => this.setState({gender: e.target.value}, () => console.log(this.state))}/> Perempuan
                    </label>
                    <br />
                    <label>
                        Alamat: <textarea cols="30" rows="10" name="alamat"
                        onChange={e => this.setState({alamat: e.target.value}, () => console.log(this.state))}></textarea>
                    </label>
                    <br />
                    <label>
                        Member: <input type="checkbox" checked={this.state.member} name="member"
                        onChange={e => this.setState({member: e.target.checked}, () => console.log(this.state))}/>
                    </label>
                    <br />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}