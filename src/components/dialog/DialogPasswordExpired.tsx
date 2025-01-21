import DialogDefault from '@/components/dialog/DialogDefault';
import DialogOptions from '@/components/dialog/DialogOptions';

const DialogPasswordExpired = () => {
    return (
        <DialogDefault
            isOpen
            image="https://kadence-internal-tools.s3.ap-southeast-3.amazonaws.com/assets/images/expired-kadence.svg"
            content={
                <div className="flex flex-col text-center">
                    <h1 className="mt-[42px] text-2xl">
                        <b>Your Password Has Expired</b>
                    </h1>
                    <p className="my-[20px] text-text-md font-medium">
                        For your protection, passwords expire every 90 days.
                        Please update your password to continue accessing your
                        account
                    </p>
                </div>
            }
            options={<DialogOptions />}
        />
    );
};

export default DialogPasswordExpired;
