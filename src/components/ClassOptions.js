import { Interactive } from "@react-three/xr";
import { Text, Html } from "@react-three/drei";

import ClassCard from "./ClassCard";

const ClassOptions = ({ forward }) => {
  return (
    <>
      <mesh position={[0, 0.1, -1]}>
        <Interactive onSelect={forward}>
          <mesh position={[-1.3, -0.4, 0.4]}>
            <circleGeometry attach="geometry" args={[0.1, 30]} />
            <meshPhongMaterial attach="material" color={"orange"} />
            <Text fontSize={0.05} position={[0, 0.02, 0.03]} color="black">
            Débuter
            </Text>
          </mesh>
        </Interactive>
        <Interactive onSelect={forward}>
          <mesh position={[-0.8, -0.4, 0.4]}>
            <circleGeometry attach="geometry" args={[0.1, 30]} />
            <meshPhongMaterial attach="material" color={"#F61153"} />
            <Text fontSize={0.05} position={[0, 0.02, 0.03]} color="black">
            Débuter
            </Text>
          </mesh>
        </Interactive>
        <Interactive onSelect={forward}>
          <mesh position={[-0, -0.4, 0.4]}>
            <circleGeometry attach="geometry" args={[0.1, 30]} />
            <meshPhongMaterial attach="material" color={"#00CFFF"} />
            <Text fontSize={0.05} position={[0, 0.02, 0.03]} color="black">
            Débuter
            </Text>
          </mesh>
        </Interactive>
        <Interactive onSelect={forward}>
          <mesh position={[0.6, -0.4, 0.4]}>
            <circleGeometry attach="geometry" args={[0.1, 30]} />
            <meshPhongMaterial attach="material" color={"#FFCD00"} />
            <Text fontSize={0.05} position={[0, 0.02, 0.03]} color="black">
            Débuter
            </Text>
          </mesh>
        </Interactive>
        <Interactive onSelect={forward}>
          <mesh position={[1.3, -0.4, 0.4]}>
            <circleGeometry attach="geometry" args={[0.1, 30]} />
            <meshPhongMaterial attach="material" color={"#21DFBC"} />
            <Text fontSize={0.05} position={[0, 0.02, 0.03]} color="black">
            Débuter
            </Text>
          </mesh>
        </Interactive>

        <Html transform distanceFactor={1}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "1500px",
            }}
          >
            <ClassCard
              color="orange"
              className="Attidude au volant"
              teacher="Moniteur Zoumana"
              period="1st"
              time="8:30 - 9:15"
              img="teacher7"
            />

            <ClassCard
              color="#F61153"
              className="Conduite Economique"
              teacher="Moniteur N'Goran"
              period="2nd"
              time="9:30 - 10:15"
              img="teacher8"
            />
            <ClassCard
              color="#00CFFF"
              className="Code de la route"
              teacher="Moniteur Ouangui"
              period="3rd"
              time="10:30 - 11:15"
              img="teacher6"
              inSession
            />
            <ClassCard
              color="#FFCD00"
              className="Conduite"
              teacher="Moniteur Yeshi"
              period="4th"
              time="11:30 - 12:15"
              img="teacher9"
            />
            <ClassCard
              color="#21DFBC"
              className="Intersection"
              teacher="Moniteur Zomadi "
              period="5th"
              time="12:30 - 1:15"
              img="teacher10"
            />
          </div>
        </Html>
      </mesh>
    </>
  );
};

export default ClassOptions;
