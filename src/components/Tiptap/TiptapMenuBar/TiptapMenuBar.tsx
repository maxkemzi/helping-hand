import React, {FC} from "react";
import {Editor} from "@tiptap/react";
import TiptapMenuButton from "@components/Tiptap/TiptapMenuButton/TiptapMenuButton";
import {
	RiBold,
	RiCodeFill,
	RiHeading,
	RiItalic,
	RiLink,
	RiListOrdered,
	RiListUnordered,
	RiStrikethrough
} from "react-icons/ri";
import {ModalTypes} from "@utils/constants/modal";
import styles from "./TiptapMenuBar.module.scss";
import {useModalContext} from "../../../contexts/ModalContext";

interface TiptapMenuBarProps {
	editor: Editor;
}

const TiptapMenuBar: FC<TiptapMenuBarProps> = ({editor}) => {
	const {openModal, closeModal} = useModalContext();

	const handleLinkConfirm = (href: string) => {
		editor.chain().focus().setLink({href, target: "_blank"}).run();
		closeModal();
	};

	const handleLinkClick = () => {
		if (editor.isActive("link")) {
			editor.chain().focus().unsetLink().run();
			return;
		}
		openModal(ModalTypes.Link, {
			onClose: closeModal,
			onConfirm: handleLinkConfirm
		});
	};

	if (!editor) {
		return null;
	}

	return (
		<div className={styles.menu}>
			<TiptapMenuButton
				disabled={!editor.can().chain().focus().toggleHeading({level: 3}).run()}
				onClick={() => editor.chain().focus().toggleHeading({level: 3}).run()}
				isActive={editor.isActive("heading")}
				icon={RiHeading}
			/>
			<TiptapMenuButton
				disabled={!editor.can().chain().focus().toggleBold().run()}
				onClick={() => editor.chain().focus().toggleBold().run()}
				isActive={editor.isActive("bold")}
				icon={RiBold}
			/>
			<TiptapMenuButton
				disabled={!editor.can().chain().focus().toggleItalic().run()}
				onClick={() => editor.chain().focus().toggleItalic().run()}
				isActive={editor.isActive("italic")}
				icon={RiItalic}
			/>
			<TiptapMenuButton
				disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
				onClick={() => editor.chain().focus().toggleCodeBlock().run()}
				isActive={editor.isActive("codeBlock")}
				icon={RiCodeFill}
			/>
			<TiptapMenuButton
				disabled={!editor.can().chain().focus().unsetLink().run()}
				isActive={editor.isActive("link")}
				onClick={handleLinkClick}
				icon={RiLink}
			/>
			<TiptapMenuButton
				disabled={!editor.can().chain().focus().toggleStrike().run()}
				onClick={() => editor.chain().focus().toggleStrike().run()}
				isActive={editor.isActive("strike")}
				icon={RiStrikethrough}
			/>
			<TiptapMenuButton
				disabled={!editor.can().chain().focus().toggleBulletList().run()}
				onClick={() => editor.chain().focus().toggleBulletList().run()}
				isActive={editor.isActive("bulletList")}
				icon={RiListUnordered}
			/>
			<TiptapMenuButton
				disabled={!editor.can().chain().focus().toggleOrderedList().run()}
				onClick={() => editor.chain().focus().toggleOrderedList().run()}
				isActive={editor.isActive("orderedList")}
				icon={RiListOrdered}
			/>
		</div>
	);
};

export default TiptapMenuBar;
