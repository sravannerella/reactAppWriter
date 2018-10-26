import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Test from './../../../components/Test/test';

export default class Datasets extends Component {

    constructor(props){
        super(props);
        this.state = {
            image: "http://www.palazzodellemisture.it/wp-content/uploads/2017/01/placeholder.jpg",
            text: ""
        }
    }

    textChanged = (value) => {
        console.log(value);
        this.setState({
            text: value
        });
    }

    modules = {
        toolbar: [
            [{'header': [1,2,3,4,5,false]}],
            ['bold', 'italic', 'underline', 'blockquote'],
            [{ 'align': [] }],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image'],
            ['clean']
        ]
    }

    // imgChange = (files) => {
    //     console.log("Image changed: ", files);
    //     let file = new FileReader();
    //     if(files.length > 0){
    //         file.onload = (e) => {
    //             this.setState({
    //                 image: e.target.result
    //             })
    //         }
    //         file.readAsDataURL(files[0]);
    //     } else {
    //         this.setState({
    //             image: "http://www.palazzodellemisture.it/wp-content/uploads/2017/01/placeholder.jpg"
    //         })
    //     }
    // }

    // imgUpload = () => {
    //     console.log("Image upload");
    //     this.refs.fileOpener.click();
    // }

    render() {
        return (
            <div className="w-100 h-100vh overflow-scroll">
                <div className="mx-4 mb-3 mt-2">
                    <h1>Datasets</h1>
                    <p className="font-20">Article Writer</p>
                </div>

                <div className="mx-4 mb-3 mt-2">
                    <div className="row">
                        <div className="col-sm-12 col-md-8">
                            <ReactQuill onChange={this.textChanged} value={this.state.text} modules={this.modules}/>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <Test text="Hello world" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}