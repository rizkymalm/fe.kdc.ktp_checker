import DialogDefault from '@/components/dialog/DialogDefault';
import DialogOptions from '@/components/dialog/DialogOptions';

const DialogPasswordIncorrect = () => {
    return (
        <DialogDefault
            isOpen
            image="https://kadence-internal-tools.s3.ap-southeast-3.amazonaws.com/assets/images/account-locked.svg"
            content={
                <div className="flex flex-col text-center">
                    <h1 className="mt-[42px] text-2xl">
                        <b>Oops...Account Locked!</b>
                    </h1>
                    <p className="my-[20px] text-text-md font-medium">
                        You&apos;ve reached the maximum number of attempts for
                        your password. For your security, your account is
                        temporarily locked.
                    </p>
                </div>
            }
            options={<DialogOptions />}
        />
    );
};

export default DialogPasswordIncorrect;
