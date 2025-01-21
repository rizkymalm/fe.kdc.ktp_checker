import { makeStyles, Modal } from '@fluentui/react';
import { Icon } from '@iconify/react';
import Image from 'next/image';

import { Buttons } from '@/components/button';

interface Props {
    isOpen: boolean;
    image: string;
    content: any;
    options?: any;
    onClose?: () => void;
}

const useStyles = makeStyles({
    modal: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        maxHeight: '100vh',
    },
});

const DialogDefault = ({ isOpen, image, content, options, onClose }: Props) => {
    const styles = useStyles();
    return (
        <Modal isOpen={isOpen} className={styles.modal}>
            <div className="flex max-h-full w-[697px] flex-col rounded-[8px]">
                <div className="sticky top-0 w-full border-b-neutral-600 bg-white">
                    <div className="flex justify-end p-5">
                        <Icon
                            icon="fluent:dismiss-24-filled"
                            width="24"
                            height="24"
                            onClick={onClose}
                        />
                    </div>
                    {/* <div className="flex justify-end p-5">
                    </div> */}
                </div>
                <div className="gap-[42px] px-[32px] py-5">
                    <div className="flex justify-center">
                        <Image
                            src={image}
                            alt="image-kadence"
                            width={274}
                            height={100}
                        />
                    </div>
                    <div className="gap-[20px]">
                        {content}
                        {options}
                    </div>
                </div>
                {/* <div className="fixed bottom-0 left-0 right-0 m-auto h-8">
                    <Button appearance="outline">Got It!</Button>

                </div> */}
                <div className="sticky bottom-0 w-full border-b-neutral-600 bg-white">
                    <div className="flex justify-center px-8 py-5">
                        <Buttons
                            text="Got it"
                            variant="contained"
                            type="button"
                            size="md"
                            fullWidth
                            color="primary"
                        />
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default DialogDefault;
