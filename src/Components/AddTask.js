import React, {useState} from "react";
import {connect} from 'react-redux';
import { addTask } from "../Actions/addTask";
import {   DatePicker, DefaultButton, Dropdown, Label, Modal, PrimaryButton, TextField}  from "@fluentui/react"
import { initializeIcons } from '@fluentui/react/lib/Icons';

initializeIcons(/* optional base url */);





 const AddTask = (props) =>  {

   


    const [state, setInputs] = useState({});
    const [openModal, ChangeModal] = useState(false);

    const handleInputChange = (event) => {
    //alert(state.date)

    
        setInputs({
            ...state,
            [event.target.name]: event.target.value,
        } )

       // alert(state.title)
    }

    const handleSubmit = () =>{
        
       
         props.dispatch(addTask({taskData: state}))
        
         ChangeModal (!openModal);
         //alert(openModal)

    }

    const handleDate =(date)=> {
        setInputs({
            ...state,
            date: date.toString(),
        })
    }

    const handleSelection = (item)=> {
        setInputs({
            ...state,
            status: item.text,
        })
    }

   

    return (
        
        <div style={{
            flex: '1',
            height:'50%',  
            margin:'0',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: 'left'
            

             
        }}>
            
           <div style={{minWidth:'300px', padding:'20px', backgroundColor:'#F8F8F8'}}>

           <form onSubmit={ (event)=> {
                event.preventDefault();
               
            // alert(input)
               
                    } }  >

            
            <Label required>Title</Label>
            <TextField name='title' onChange={handleInputChange} /> 
            <Label>Details</Label>
            <TextField multiline name='details' onChange={handleInputChange}/> 
            <Label required>Date</Label>
            <DatePicker placeholder='Select a date' name='date'  onSelectDate={handleDate}/> <br />
            {/* //"ToDo", "Ongoing", "Stalled", or "Done".
             */}
            <Label>Status</Label>
            <Dropdown 
            placeholder="Select the status"
            options={[
                {text: 'To Do', key:Math.random()},
                {text: 'Ongoing', key: Math.random()},
                {text: 'Stalled', key:Math.random()},
                {text: 'Done', key: Math.random()}
            ]} 
            onChanged={handleSelection}
            /> <br></br>

            <div style={{textAlign:'right'}}>
                <PrimaryButton text="Add" onClick={handleSubmit} />
            </div>
            </form>
           <Modal 
           isOpen={openModal}
           isBlocking={false}
           
           
           >
               <div style={{textAlign:'center '}}>
                   <h3>Task added!</h3><hr/>
                   <div style={{textAlign:'left', padding:'10px', }}>
                   <Label>Title: {state.title}</Label>
                   <Label>Details: {state.details}</Label>
                   <Label>Date: {state.date}</Label>
                   <Label>Status: {state.status}</Label>
                   </div>
                   <div style={{padding:'20px'}}>
                   <DefaultButton text="Close" onClick={()=>ChangeModal(!openModal)} />

                   </div>
               </div>
           </Modal>

           </div>
        </div>

       

    )
}

export default connect() (AddTask);