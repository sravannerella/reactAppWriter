import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImgCard from '../../../components/ImgCard/ImgCard';
import fire from './../../../providers/Firebase/fire';

export default class Datasets extends Component {

    constructor(props){
        super(props);
        this.state = {
            image: "http://www.palazzodellemisture.it/wp-content/uploads/2017/01/placeholder.jpg",
            text: "",
            firebase: null
        }
    }

    componentWillMount() {
        this.setState({
            firebase: fire.database()
        });
    }

    componentDidMount() {
        var ref = this.state.firebase.ref().child('/writings');
        ref.on('value', (snapshot) => {
            console.log("Snapshot: ", snapshot.val());
        });
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

    addWriting() {
        
        fire.auth()
        .signInWithEmailAndPassword("admin@writer.com", "Pokemonem12345")
        .then( (confirm) => {
            console.log("Confirmed", confirm);
            var timestamp = + new Date();
            this.state.firebase.ref().child('/writings').push({
                author: "Sravan Nerella",
                content: this.state.text,
                coverImg: this.state.image,
                published: true,
                createdOn: timestamp,
                title: "TEST TITLE"
            });
        })
        .catch( (err) => {
            console.log("Err", err.message, " Code: " ,err.code);
        });
    }

    render() {
        return (
            <div className="w-100 h-100vh overflow-scroll">
                <div className="mx-4 mb-3 mt-2">
                    <h1>Datasets</h1>
                    <p className="font-20">Article Writer</p>
                </div>

                <div className="mx-4 mb-3 mt-2">
                    <div className="row">
                        <div className="col-sm-12 col-md-7">
                            <ReactQuill onChange={this.textChanged} value={this.state.text} modules={this.modules}/>
                        </div>
                        <div className="col-sm-12 col-md-5">
                            <ImgCard addWriting={this.addWriting.bind(this)} text="Article Image" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}