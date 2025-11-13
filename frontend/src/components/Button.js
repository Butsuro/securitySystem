function Button({ icon, label, status, iconColor, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-4 group ${className}`}
    >
      {/* Icon Circle */}
      <div className="w-32 h-32 rounded-full bg-white border-4 border-gray-200 flex items-center justify-center group-hover:border-blue-400 transition-all duration-300 shadow-lg">
        <img 
          src={icon} 
          alt={label} 
          className="w-16 h-16 object-contain"
          style={iconColor ? { 
            filter: iconColor === 'red' 
              ? 'invert(18%) sepia(98%) saturate(7444%) hue-rotate(357deg) brightness(95%) contrast(118%)' 
              : 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%)'
          } : {}}
        />
      </div>
      
      {/* Label */}
      <div className="text-center">
        <p className="text-xl font-semibold text-gray-800">{label}</p>
        {status && (
          <p className={`text-sm mt-1 font-semibold ${status === 'on' ? 'text-red-500' : 'text-green-500'}`}>
            ({status.toUpperCase()})
          </p>
        )}
      </div>
    </button>
  );
}

export default Button;