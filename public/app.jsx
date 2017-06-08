
//Greeter Message Component
var GreeterMessage = React.createClass({
    render: function(){
        var name = this.props.name;
        var message = this.props.message;
        return(
            <div>
                <h1>Hello {name}!</h1>
                <p>{message}</p>
            </div>
    );}    
});


//Greeter Form Component
var GreeterForm = React.createClass({

    onFormSubmit: function(e){
        e.preventDefault();
        var updates = {};
        var name = this.refs.txtname.value;
        if(typeof name === 'string' && name.length > 0){
            this.refs.txtname.value = '';
            updates.name = name;
        }

        var msg = this.refs.txtmsg.value;
        if(typeof msg === 'string' && msg.length > 0){
           this.refs.txtmsg.value = '';
           updates.message = msg;                      
        }
        this.props.onNewData(updates); 

        /*if(typeof name === 'string' && name.length > 0){
            this.refs.txtname.value = '';
            this.props.onNewName(name);            
        }
        var msg = this.refs.txtmsg.value;
        if(typeof msg === 'string' && msg.length > 0){
           this.refs.txtmsg.value = '';
           this.props.onNewMessage(msg); 
        }*/
    },

    render: function(){
        return(
            <form onSubmit={this.onFormSubmit}>
                    NAME: <br/>
                    <input type="text" ref="txtname" placeholder="Enter name"/>
                    <br/>MESSAGE:<br/>
                    <textarea type="text" ref="txtmsg" placeholder="Enter a message"/>
                    <button>Submit</button>
            </form>
        );
    }
});



//takes an Options object as its argument
var Greeter = React.createClass({

    getDefaultProps: function(){
        return {
            name: 'Default name',
            message: 'The Default Message!'
        };
    },

    getInitialState: function(){
        return {
            name: this.props.name,   //Set the state to it's Initial value, i.e. this.props.name
            message: this.props.message
        };
    },
    //UPDATE the state with values from the FORM
/*    onButtonClick: function(e){
        e.preventDefault();//Prevent form from Submitting and  causing Page Refresh
        
        var nameRef = this.refs.name;
        var name = nameRef.value; //store this textbox value in a variable called name
        nameRef.value = '';
        if(typeof name === 'string' && name.length > 0){
            this.refs.name.value = '';//Clear the textbox value using refs.name
            this.setState({
                name: name
            });
        }  

        var msgRef = this.refs.txtmsg;
        var msg = msgRef.value;
        if(typeof msg === 'string' && msg.length > 0){
            this.refs.txtmsg.value = '';//clear the msg textbox using refs.txtmsg
            this.setState({
                message: msg                
            });
        }
    },
*/

    //This message is Property
    handleNewName: function(name){
        this.setState({
                name: name
            });        
    },

    //This message is Property
    handleNewMessage: function(message){
        this.setState({
            message:message
        });
    },
    handleNewData: function(updates){
        this.setState(updates);
    },

    render: function(){
        var name = this.state.name;
        var message = this.state.message;
        return (            
            <div>                       
                <GreeterMessage name={name} message={message} />
                <GreeterForm onNewData={this.handleNewData} />
                {/*<GreeterForm onNewName={this.handleNewName} onNewMessage={this.handleNewMessage} />*/}
            </div>
        );
    }

    /*render: function(){
        var name = this.state.name;
        var message = this.props.message;
        return (
            <div>                       
                <GreeterMessage name={name} message={message}/>
                <form onSubmit={this.onButtonClick}>
                    <input type="text" ref="name"/>
                    <button>Set Name</button>
                </form>
            </div>
        );
    }*/
});

var firstname = 'Andrews';

ReactDOM.render(
       <Greeter name={firstname} message="User message" />,
       document.getElementById('app')
    );
