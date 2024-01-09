const ParameterBox = () => {
return (
  <div className="w-auto h-8 m-2 right-2 rounded flex p-2 items-center font-medium font-robotoCondensed">
    <span className="w-[25px]">ID</span>
    <span className="ml-2 basis-1/2 p-1 border-l-[1px] border-l-zinc-300">
      Task
    </span>
    <span className="basis-2/12 border-l-[1px] border-l-zinc-300 p-1">
      Priority
    </span>
    <span className="basis-2/12 border-l-[1px] border-l-zinc-300 p-1">
      Owner
    </span>
    <span className="basis-2/12 border-l-[1px] border-l-zinc-300 p-1 truncate min-[0px]:max-xl:hidden xl:visible">
      Created Date
    </span>
    <span className="basis-2/12 border-l-[1px] border-l-zinc-300 p-1">
      Due Date
    </span>
    <span className="basis-2/12 border-l-[1px] border-l-zinc-300 p-1 min-[0px]:max-xl:hidden xl:visible ">
      Days Left
    </span>
    <span className="basis-2/12 border-l-[1px] border-l-zinc-300 p-1">
      Edit
    </span>
  </div>
);
}

export default ParameterBox;