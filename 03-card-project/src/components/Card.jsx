import React from "react";
import { Bookmark } from "lucide-react";

const Card = () => {
  return (
    <div className="card">
      <div>
        <div className="top">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGapVpcqEg5Qz2_6GMnCxyM-RiBszgAeMI_S-BaRCcUQ&s=10"
            alt="Netflix"
          />

          <button>
            Save <Bookmark size={12} />
          </button>
        </div>

        <div className="center">
          <div className="company">
            <h3>Netflix</h3>
            <span>6 days ago</span>
          </div>

          <h2>Senior UI/UX Designer</h2>

          <div className="tag">
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>$120/hr</h3>
          <p>Mumbai, India</p>
        </div>

        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;