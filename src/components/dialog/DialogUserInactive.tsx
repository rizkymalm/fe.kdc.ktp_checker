import DialogDefault from '@/components/dialog/DialogDefault';

const DialogUserInactive = () => {
    return (
        <DialogDefault
            isOpen
            image="https://kadence-internal-tools.s3.ap-southeast-3.amazonaws.com/assets/images/inactive-kadence.svg"
            content={
                <div className="flex flex-col text-center">
                    <h1 className="mt-[42px] text-2xl">
                        <b>Your account is currently inactive</b>
                    </h1>
                    <p className="my-[20px] text-text-md font-medium">
                        To activate your account, please contact the
                        administrator at{' '}
                        <b>
                            <i>admin@kadence.id</i>
                        </b>
                    </p>
                </div>
            }
        />
    );
};

export default DialogUserInactive;
