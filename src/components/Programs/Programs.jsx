// import Title from '../Title/Title';
import './Programs.css';
import programModels1 from '../../assets/program-1.png'
import programModels2 from '../../assets/program-2.png'
import programModels3 from '../../assets/program-3.png'
import programIcon1 from '../../assets/program-icon-1.png'
import programIcon2 from '../../assets/program-icon-2.png'
import programIcon3 from '../../assets/program-icon-3.png'

const Programs = () => {
  return (
      <div className="programs">
        <div className="program">
          <img src={programModels1} alt="" />
          <div className="caption">
            <img src={programIcon1} alt="" />
            <p>Graudation Degree</p>
          </div>
        </div>

        <div className="program">
          <img src={programModels2} alt="" />
          <div className="caption">
            <img src={programIcon2} alt="" />
            <p>Graudation Degree</p>
          </div>
        </div>

        <div className="program">
          <img src={programModels3} alt="" />
          <div className="caption">
            <img src={programIcon3} alt="" />
            <p>Graudation Degree</p>
          </div>
        </div>
      </div>
  );
};

export default Programs
