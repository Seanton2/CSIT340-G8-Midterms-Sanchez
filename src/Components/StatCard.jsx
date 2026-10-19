

function StatCard({ title, description, command}) {
    return (
        <>
            <div className="w-48 rounded-xl border-2 border-[#5C4F4A] py-4 text-center">
            <p className="text-4xl font-bold text-[#5C766D]">{title}</p>
            <p className="mt-1 text-lg">{description}</p>
          </div>
          <div className="w-48 rounded-xl border-2 border-[#5C4F4A] py-4 text-center">
            <p className="text-4xl font-bold text-[#5C766D]">{command}</p>
            <p className="mt-1 text-lg">Bookmarks</p>
          </div>
        </>
    

    
        );
}

export default StatCard;