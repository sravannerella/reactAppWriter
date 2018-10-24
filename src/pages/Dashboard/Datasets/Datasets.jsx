import React, { Component } from 'react';

export default class Datasets extends Component {

    constructor(props){
        super(props);
        this.state = {
            image: "http://www.palazzodellemisture.it/wp-content/uploads/2017/01/placeholder.jpg"
        }
    }

    imgChange = (files) => {
        console.log("Image changed: ", files);
        let file = new FileReader();
        if(files.length > 0){
            file.onload = (e) => {
                this.setState({
                    image: e.target.result
                })
            }
            file.readAsDataURL(files[0]);
        } else {
            this.setState({
                image: "http://www.palazzodellemisture.it/wp-content/uploads/2017/01/placeholder.jpg"
            })
        }
    }

    imgUpload = () => {
        console.log("Image upload");
        this.refs.fileOpener.click();
    }

    render() {
        return (
            <div className="w-100 h-100vh overflow-scroll">
                <div className="mx-4 mb-3 mt-2">
                    <h1>Datasets</h1>
                    <p className="font-20">Article Writer</p>
                </div>

                <div className="container">

                    <div className="mx-4 mt-3">
                        <div className="d-flex align-items-center">
                            <h1 className="font-30 px-3 py-2 text-muted m-0 width-65">T</h1>
                            <input type="text" className="title-placeholder w-100 text-dark text-center font-30" placeholder="Title" />
                        </div>
                    </div>

                    <div className="mx-4 mt-3">
                        <div className="d-flex align-items-center">
                            <h1 className="font-30 px-3 py-2 text-muted m-0 width-65"><i className="far fa-image"></i></h1>
                            {/* <textarea name="content" className="title-placeholder w-100 text-dark" id="content" placeholder="Content"></textarea> */}
                            <input type="file" onChange={ (e) => {this.imgChange(e.target.files)} } accept="image/*" ref="fileOpener" className="d-none"/>
                            <img src={this.state.image} className="title-placeholder img-450 w-100 img-contain" alt="Placeholder" onClick={this.imgUpload} />
                        </div>
                    </div>


                    <div className="mx-4 mt-3">
                        <div className="d-flex align-items-center">
                            <h1 className="font-30 px-3 py-2 text-muted m-0 width-65">P</h1>
                            {/* <input type="text" className="title-placeholder w-100 text-dark font-weight-bold" placeholder="Content"/> */}
                            <textarea name="content" className="title-placeholder w-100 text-dark" id="content" placeholder="Content"></textarea>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

}