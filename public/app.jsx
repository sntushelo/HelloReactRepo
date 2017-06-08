
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
//Greeter Component = Container
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
            </div>
        );
    }
    
});

var firstname = 'Andrews';

ReactDOM.render(
       <Greeter name={firstname} message="User message" />,
       document.getElementById('app')
    );
