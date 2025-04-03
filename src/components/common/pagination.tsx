const NexAndpre = () => {
  return (
    <div>
      <div className="join mb-10 gap-1 items-center">
        <button className="join-item btn btn-disabled rounded-3xl ">
          <img src="./cardIcons/arrow-right.svg" alt="" />
        </button>
        <button className="join-item btn rounded-4xl border-0">1</button>
        <span>...</span>
        <button className="join-item btn rounded-4xl border-0">5</button>
        <button className="join-item btn rounded-4xl bg-blue-400">6</button>
        <button className="join-item btn rounded-4xl border-0">7</button>
        <span>...</span>
        <button className="join-item btn rounded-4xl border-0">10</button>
        <button className="join-item btn btn-disabled rounded-3xl bg-[url(/cardIcons/arrow-left.svg)] bg-no-repeat bg-center">
          <img src="./cardIcons/arrow-left.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export { NexAndpre };
