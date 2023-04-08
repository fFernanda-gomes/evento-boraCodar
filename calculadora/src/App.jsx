import './App.scss'

import percent from './assets/percent.svg';
import divide from './assets/divide.svg';
import X from './assets/x.svg';
import minus from './assets/minus.svg';
import plus from './assets/plus.svg';
import plusMinus from './assets/plusMinus.svg';
import equals from './assets/equals.svg';

function App() {
  return (
      <div className="master">
        <div className="bgCal">
          <div className="top">

          </div>
          <div className="keyboard">
            <button>CE</button>
            <button>C</button>
            <button>
              <img src={percent} alt="" />
            </button>
            <button>
            <img src={divide} alt="" />
            </button>

            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>
            <img src={X} alt="" />
            </button>

            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>
            <img src={minus} alt="" />
            </button>

            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>
            <img src={plus} alt="" />
            </button>

            <button>
             <img src={plusMinus} alt="" />
            </button>
            <button>0</button>
            <button>,</button>
            <button>
            <img src={equals} alt="" />
            </button>
          </div>
        </div>
      </div>
  )
}

export default App
