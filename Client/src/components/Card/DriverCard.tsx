export default function DriverCard() {
  return (
    <div className="flex flex-col bg-card rounded-lg">
        <div>Driver</div>
        <div className="flex flex-row justify-between">
            <div>
                <span>Name</span>
                <span>Second Name</span>
            </div>
            <span>Country</span>
        </div>
        <div className="flex flex-col">
            <span>Team Name</span>
            <div>DRIVER IMAGE</div>
        </div>
        
    </div>
  )
}
