import Image from 'next/image';

export default function Projects() {
  return (
    <div>
      <h1>My Projects</h1>
      <div>
        <h2>Project 1</h2>
        <Image src="/images/project1.jpg" alt="Project 1" width={400} height={250} />
        <p>Description of Project 1.</p>
      </div>
      <div>
        <h2>Project 2</h2>
        <Image src="/images/project2.jpg" alt="Project 2" width={400} height={250} />
        <p>Description of Project 2.</p>
      </div>
    </div>
  );
}
