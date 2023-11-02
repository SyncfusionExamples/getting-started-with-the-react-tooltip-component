import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import './App.css';

function App() {
  const tooltipTemplate = () => {
    return (
      <div id='democontent'>
        <div className='info'>
          <h3 style={{marginTop:'10px'}}>Eastern Bluebird</h3>
          <div>
            <div style={{float:'left',width:'57%'}}>
                The<a href='https://en.wikipedia.org/wiki/Eastern_bluebird' target='blank'> Eastern Bluebird</a>
                is easily found in open fields and sparse woodland areas, including along woodland edges.These are<i>cavity-nesting birds</i>and a pair of eastern bluebirds will raise 2-3 broods annually, with 2-8 light blue or whitish eggs per brood.
            </div>
            <div id='bird'><img src='https://ej2.syncfusion.com/react/demos/src/tooltip/images/bird.png' width='125' height='125' /></div>
          </div>
          <div style={{clear:'both'}}>
              <p> Eastern bluebirds can be very vocal in flocks. Their calls include a rapid, mid-tone chatter and several long dropping pitch calls.</p>
          </div>
        </div>
      </div>);
};
  return (
    <div className="App">
      <TooltipComponent content={tooltipTemplate}  //content='Lets go green & Save Earth!'
        style={{ display: 'block', position: 'absolute', left: 'calc( 50% - 60px)', top: '35%' }}
        position='RightCenter' isSticky={true} 
         >
        <ButtonComponent >Show Tooltip</ButtonComponent>
        </TooltipComponent>
    </div>
  );
}

export default App;
