var Counter = React.createClass({
        getInitialState: function() {
            return {
                counter: 0,
            };
        },    
        increment: function() {
          this.setState({
              counter: this.state.counter + 1
          });
        },
        decrement: function() {
          this.setState({
              counter: this.state.counter - 1
          });
        },



        componentWillMount: function(){
          var randomTime = Math.random();
          console.log('Mount z własnowościami: ', this.props);
          console.log('Czas ładowania', randomTime);
          
        },


        render: function() {
            
            var buttonPlus = React.createElement('button', {onClick: this.increment}, "plus");
            var buttonMinus = React.createElement('button', {onClick: this.decrement}, "minus");
            
            var counter = React.createElement('span', {}, 'Licznik ' + this.state.counter);

            

            var counterWrap = React.createElement('div', {},buttonMinus,counter,buttonPlus);
                
                
                
                   
            return React.createElement('div', {}, counterWrap);       
        }
      });

       var element = React.createElement('div', {}, [
         React.createElement(Counter, {key: 1, startingPoint: 30}),
         React.createElement(Counter, {key: 2}),
         React.createElement(Counter, {key: 3}),
         React.createElement(Counter, {key: 4}),
         React.createElement(Counter, {key: 5})
         ]);
      ReactDOM.render(element, document.getElementById('app'));