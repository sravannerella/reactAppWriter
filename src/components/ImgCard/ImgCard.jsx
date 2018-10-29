import React, { Component } from 'react';

export default class ImgCard extends Component {

    constructor(props) {
        super(props);
        console.log("Props: ", props);
        this.state = {
            img: "http://www.palazzodellemisture.it/wp-content/uploads/2017/01/placeholder.jpg",
            imgName: "Choose An Image",
            addWrites: props.addWriting
        }
    }

    imgChange = (files) => {
        let file = new FileReader();
        if (files.length > 0) {
            file.onload = (e) => {
                console.log(e.target);
                this.setState({
                    img: e.target.result,
                    imgName: files[0].name
                })
            }
            file.readAsDataURL(files[0]);
        } else {
            this.setState({
                img: "http://www.palazzodellemisture.it/wp-content/uploads/2017/01/placeholder.jpg"
            })
        }
    }

    imgUpload = () => {
        console.log("Image upload");
        this.refs.fileOpener.click();
    }

    render() {
        return (
            <div>

                <div className="shadow h-400 p-3">
                    <h1 className="text-center">{this.props.text}</h1>
                    <input ref="fileOpener" type="file" className="d-none" onChange={ (e) => {this.imgChange(e.target.files); } } />
                    <img src={this.state.img} className="w-100 h-300" onClick={this.imgUpload} alt="Choose" />
                    <p className="text-nowrap text-center"> {this.state.imgName} </p>
                </div>

                <div className="d-flex flex-wrap mt-2 p-4 justify-content-center">
                    <button className="btn btn-outline-dark my-2 mx-2">Draft</button>
                    <button onClick={this.state.addWrites} className="btn btn-outline-primary my-2 mx-2">Publish</button>
                    <button className="btn btn-outline-danger my-2 mx-2">Trash</button>
                </div>
            </div>
        );
    }
}