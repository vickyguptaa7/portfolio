import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ACHIVEMENTS from "../../constant/achievements";
import Wrapper from "../Wrapper/wrapper";

function Achievements() {
  return (
    <Wrapper>
      <section id="about" className="pt-20">
        <div className="flex flex-col items-center justify-center px-8 header">
          <h1 className="text-[color:var(--color-primary)] text-3xl font-bold mb-2 text-center tracking-wide">
            ACHIEVEMENTS
          </h1>
          <div className="h-[0.30rem] w-10 bg-[color:var(--color-primary)] rounded-full"></div>
        </div>
        <div className="my-12">
          <VerticalTimeline lineColor="#05cbf7">
            {ACHIVEMENTS.map((achieve) => {
              return (
                <VerticalTimelineElement
                  key={achieve.id}
                  className=""
                  iconClassName="shadow-md shadow-gray-300"
                  icon={
                    <div className="flex items-center justify-center w-full h-full bg-white rounded-full ">
                      <img
                        src={achieve.icon}
                        className="object-center w-8 aspect-square"
                      />
                    </div>
                  }
                  dateClassName=" text-[color:var(--primary-text-color)]"
                  date={achieve.date.toUpperCase()}
                >
                  <div className="bg-black">
                  <h2 className="vertical-timeline-element-title">
                    {achieve.name}
                  </h2>
                  <p className="whitespace-pre-wrap">{achieve.description}</p>
                  </div>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </section>
    </Wrapper>
  );
}

export default Achievements;
