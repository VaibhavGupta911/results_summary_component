
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faBoltLightning, faMessage, faEye } from '@fortawesome/free-solid-svg-icons';
function App() {
  function random(){
    return (Math.floor(Math.random() * 100))
  }
  var reaction = random();
  var visual = random();
  var memory = random();
  var verbal = random();
  var total = Math.floor((reaction + visual + memory + verbal) / 4);
  return (
    <>
      <div className='main'>
        <div className='container'>
          <div className='result'>
            <div className='heading'>Your Result</div>
            <div className='circle'>
              <div className='score'>{total}</div>
              <div>of 100</div>
            </div>
            <div className='greeting'>Great</div>
            <div className='para'>Your score is higher than {random()}% of people that have taken these test</div>
          </div>
          <div className='summary'>
            <div className='sum-heading'>Summary</div>
            <div className='sum-div'>
              <div className='reaction'><FontAwesomeIcon icon={faBoltLightning} color='hsl(0, 100%, 67%)' /> Reaction</div>
              <div>{reaction}/100</div>
            </div>
            <div className='sum-div'>
              <div className='memory'><FontAwesomeIcon icon={faBrain} color='hsl(39, 100%, 56%)' /> Memory</div>
              <div>{memory}/100</div>
            </div>
            <div className='sum-div'>
              <div className='verbal'><FontAwesomeIcon icon={faMessage} color='hsl(166, 100%, 37%)' /> Verbal</div>
              <div>{verbal}/100</div>
            </div>
            <div className='sum-div'>
              <div className='visual'><FontAwesomeIcon icon={faEye} color='hsl(234, 85%, 45%)' />Visual</div>
              <div >{visual}/100</div>
            </div>
            <button type='button'>Continue</button>

          </div>
        </div>
      </div>


    </>

  );
}

export default App;
