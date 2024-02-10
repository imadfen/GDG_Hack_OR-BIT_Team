import { Icon } from "@iconify/react";
import Card from "./card";

export default function UserCard({ name, field, onButtonClick, icon = "mingcute:user-edit-fill" }) {
    return (
        <Card className="">
            <div className="h-fit flex items-center gap-4 relative">
                <img src="/mentor.png" alt="" width={80} />
                <div>
                    <p>{name}</p>
                    <p className="text-blue-800 text-sm">{field}</p>
                </div>
                <Icon icon={icon} width={24} className='absolute bottom-1 right-1 cursor-pointer' onClick={onButtonClick} />
            </div>
        </Card>
    )
}
