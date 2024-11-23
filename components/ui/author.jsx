import Image from "next/image";
import formatDate from "@/lib/utils";
import avatar from '@/assets/media/avatar.png'

const AuthorBlock = ({date}) => {
	return (
		<div className="p-4 border rounded-2xl my-5 flex items-center justify-between">
			<div className='flex items-center justify-start gap-2'>
				<Image src={avatar} width={50} height={50} alt="Author Avatar" className="rounded-full border drop-shadow-sm" />
				<div className="flex flex-col items-start justify-center">
					<p className="text-xs">Scritto da:</p>
					<h2 className="text-sm sm:text-base underline">Tobia Bartolomei</h2>
				</div>
			</div>
			<p>il {formatDate(date)}</p>
		</div>
	);
};

export default AuthorBlock;