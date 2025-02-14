import React, {useEffect, useMemo} from 'react';
import SendArrowAnimation from '@/components/Misc/SendArrowAnimation.js';
import {Box, Text} from 'ink';
import {useStore} from '@nanostores/react';
import {formatBytes} from '@/functions/helper.js';
import ProgressBar from '@/components/Misc/ProgressBar.js';
import {SenderSinglePeerTransferInfo} from '@/types/storeTypes.js';

type PropType = {
	peerTransferInfo: SenderSinglePeerTransferInfo;
};
const SinglePeerTransferForSender = ({peerTransferInfo}: PropType) => {
	const totalProgress = useMemo(() => {
		return Math.min(
			(peerTransferInfo.totalTransferred / peerTransferInfo.totalFileSize) *
				100,
			100,
		);
	}, [peerTransferInfo.totalTransferred, peerTransferInfo.totalFileSize]);

	const defaultComponent = (
		<Text>
			SENDING⠀
			<SendArrowAnimation />
		</Text>
	);
	const stateWiseComponent = {
		DEFAULT: defaultComponent,
		TRANSFERRING: defaultComponent,
		TRANSFERRED: defaultComponent,
		SUCCESS: <Text dimColor={true}>Files Transfer Complete 🎉</Text>,
		ERROR: (
			<Text color={'red'}>
				{peerTransferInfo.errorMsg ?? 'Transfer Failed'} ✘
			</Text>
		),
	};

	return (
		<Box
			borderColor="green"
			borderStyle="bold"
			paddingX={1}
			flexDirection="column"
			marginTop={1}
		>
			<Box flexDirection="column">
				<Text backgroundColor="green" color="white" bold>
					{' '}
					{peerTransferInfo.peerInfo.peerName}{' '}
				</Text>
			</Box>

			{stateWiseComponent[peerTransferInfo.state]}
			<Box>
				<ProgressBar left={0} percent={totalProgress ?? 0} />
				<Text dimColor={true}>
					⠀({formatBytes(peerTransferInfo.totalTransferred)}⠀/⠀
					{formatBytes(peerTransferInfo.totalFileSize)})
				</Text>
			</Box>
		</Box>
	);
};

export default SinglePeerTransferForSender;
