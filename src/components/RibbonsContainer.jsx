import Ribbons from './Ribbons';

const RibbonsContainer = () => {
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 to-transparent"></div>
      
      {/* Ribbons Animation */}
      <div className="absolute inset-0 animate-fadeIn">
        <Ribbons
          baseThickness={30}
          colors={['#ffffff']}
          speedMultiplier={0.5}
          maxAge={500}
          enableFade={false}
          enableShaderEffect={true}
        />
      </div>
    </div>
  );
};

export default RibbonsContainer;
