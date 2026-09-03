import { Badge } from "@/components/ui/badge";

export const HomePage = () => {
  return (
    <>
      <section className="relative">
        <img src="/img/meisamtj-big.png" className="-mt-13" />

          <h1 className="absolute top-1/2 p-5 rounded-lg shadow-lg bg-background">
            <span className="font-light text-2xl">Hi, I'm</span>
            <strong className="block text-4xl mt-2 font-normal font-mono">Meisam Tj.</strong>
          </h1>

          <div className="absolute bottom-0 w-full bg-linear-to-t from-10% from-background to-transparent h-30" />
      </section>

      <p className="font-mono">
        I'm a full-stack web developer specializing in Laravel and React, building modern, scalable web applications. I have years of experience working across different technologies and turning ideas into reliable, user-focused products. 
      </p>

      <section className="flex gap-2 mt-5 flex-wrap">
        <Badge variant="secondary">Laravel</Badge>
        <Badge variant="secondary">React</Badge>
        <Badge variant="secondary">TypeScript</Badge>
        <Badge variant="secondary">PHP</Badge>
        <Badge variant="secondary">JavaScript</Badge>
        <Badge variant="secondary">TanStack</Badge>
        <Badge variant="secondary">ShadCn</Badge>
        <Badge variant="secondary">Inertia.js</Badge>
        <Badge variant="secondary">Livewire</Badge>
        <Badge variant="secondary">Alpine.js</Badge>
        <Badge variant="secondary">Tailwind CSS</Badge>
        <Badge variant="secondary">HTML</Badge>
        <Badge variant="secondary">CSS</Badge>
      </section>
    </>
  );
};
