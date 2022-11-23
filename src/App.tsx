import React from "react";
import "./App.css";

const s = (x: number) => {
  if (x <= 0) return 0;
  if (x >= 1) return 1;

  return 3 * x ** 2 - 2 * x ** 3;
};

function App() {
  const pics = [
    React.useRef<HTMLImageElement>(null),
    React.useRef<HTMLImageElement>(null),
    React.useRef<HTMLImageElement>(null),
    React.useRef<HTMLImageElement>(null),
    React.useRef<HTMLImageElement>(null),
  ];

  const refs = [
    React.useRef<HTMLDivElement>(null),
    React.useRef<HTMLDivElement>(null),
    React.useRef<HTMLDivElement>(null),
    React.useRef<HTMLDivElement>(null),
    React.useRef<HTMLDivElement>(null),
  ];

  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      const height = window.innerHeight;

      for (const i in refs) {
        const ref = refs[i];
        const div = ref.current;
        const top = div?.getBoundingClientRect().top;

        console.log(ref);
        console.log(div);
        console.log(top);
        if (top === undefined) return;

        const ratio = top / height;
        const x = 3 * (1 - ratio);

        const y = s(x);

        const pic = pics[i].current;
        if (pic) pic.style.opacity = `${y}`;
      }
    });
  }, []);

  return (
    <div className="App">
      <h1>Hello and welcome!</h1>
      <div>
        <div className="fadeContainer">
          <div className="fade">
            <img
              ref={pics[0]}
              width={480}
              height={270}
              src="https://images.ctfassets.net/hrltx12pl8hq/3kr5Ng3EogZMpcWCtYMeqT/668eddf01d66cbd5a338127288f2616f/Business_.jpg?fit=fill&w=480&h=270"
            />
            <img
              ref={pics[1]}
              width={480}
              height={270}
              src="https://www.business2community.com/wp-content/uploads/2015/10/42454567_m.jpg.jpg"
            />
            <img
              ref={pics[2]}
              width={480}
              height={270}
              src="https://i.guim.co.uk/img/media/2ff686d2a7b1c1df1226f0c24ff7150e4ac12f61/0_0_4914_3524/master/4914.jpg?width=620&quality=85&auto=format&fit=max&s=b122aa8a0475176ebb0e8ac73c8ceef1"
            />
            <img
              ref={pics[3]}
              width={480}
              height={270}
              src="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg"
            />
            <img
              ref={pics[4]}
              width={480}
              height={270}
              src="https://i.kym-cdn.com/photos/images/facebook/002/283/888/620.jpg"
            />
            {/*
            <img
              ref={pics[5]}
              width={480}
              height={270}
              src="https://i.kym-cdn.com/photos/images/newsfeed/000/954/161/b3a.jpg"
            />
            */}
          </div>
        </div>
        <div ref={refs[0]} className="text">
          Lorem ipsum and so on
        </div>
        <div ref={refs[1]} className="text">
          Standard text goes here
        </div>
        <div ref={refs[2]} className="text">
          Imerso is the shit, subscribe like and share
        </div>
        <div ref={refs[3]} className="text">
          Yes yes yes yes yes yes yes yes yes yes yes yes yes
        </div>
        <div ref={refs[4]} className="text">
          Future woman holding corn cob
        </div>
      </div>
    </div>
  );
}

export default App;
