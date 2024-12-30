const SkillSection = ({ skillCategories }) => (
    <section className="relative py-20">
      <BackgroundEffects />
      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeader 
          icon={Cpu} 
          title="Skills & Technologies" 
          subtitle="Technologies and tools I've worked with" 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );