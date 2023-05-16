const getSmsGradeColor = (grade) => {
    switch (grade) {
      case "R":
        return "bg-green-500 text-white";
      case "1":
        return "bg-white text-black";
      case "2":
        return "bg-yellow-500 text-white";
      case "3":
        return "bg-yellow-400 text-gray-900";
      case "4":
        return "bg-red-500 text-white";
      case "5":
        return "bg-red-400 text-white";
      case "6":
        return "bg-maroon-400 text-white";
      case "7":
        return "bg-red-400 text-white";
      case "SGB":
        return "bg-gray-400 text-white";
      case "Other":
        return "bg-red-400 text-white";
      case "Teachers":
        return "bg-pink-400 text-white";
      default:
        return "bg-gray-400 text-white";
    }
  };
  
  export default getSmsGradeColor;
  