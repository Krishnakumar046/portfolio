import styled from "styled-components";
const TextRunning = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="loader">
          <div className="words">
            <span className="word">Frontend</span>
            <span className="word">React JS</span>
            <span className="word">Next JS</span>
            <span className="word">Javascript</span>
            <span className="word">Frontend</span>
          </div>
          <p className="developer-word">Developer</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    /* color used to softly clip top and bottom of the .words container */
    --bg-color: #111;
    background: transparent;
    padding: 1rem 2rem;
    border-radius: 1.25rem;
     display: flex;
    justify-content: center;
  }
  .loader {
    color: rgb(124, 124, 124);
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 25px;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    height: 40px;
    padding: 10px 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-radius: 8px;
  }

  .words {
    overflow: hidden;
    position: relative;
    font-size:150;
    font-weight: 600;
    text-align:center
  }
  .words::after {
    content: "";
    position: absolute;
    inset: 0;
    background: transparent
    );
    z-index: 20;
  }
.developer-word {
    font-weight:600;
    margin-left: 10px;
    }

  .word {
    display: block;
    height: 100%;
    padding-left: 6px;
    color: #956afa;
    animation: spin_4991 8s infinite;
  }

  @keyframes spin_4991 {
  0% {
    transform: translateY(0%);
  }

  10% {
    transform: translateY(-102%);
  }

  25% {
    transform: translateY(-100%);
  }

  35% {
    transform: translateY(-202%);
  }

  50% {
    transform: translateY(-200%);
  }

  60% {
    transform: translateY(-302%);
  }

  75% {
    transform: translateY(-300%);
  }

  85% {
    transform: translateY(-402%);
  }

  100% {
    transform: translateY(-400%);
  }
}

`;

export default TextRunning;
