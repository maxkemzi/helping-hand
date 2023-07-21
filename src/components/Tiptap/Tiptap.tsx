import React, {FC} from "react";
import {EditorContent, useEditor} from "@tiptap/react";
import {StarterKit} from "@tiptap/starter-kit";
import {Link} from "@tiptap/extension-link";
import TiptapMenuBar from "@components/Tiptap/TiptapMenuBar/TiptapMenuBar";
import classNames from "classnames";
import {CharacterCount} from "@tiptap/extension-character-count";
import {Placeholder} from "@tiptap/extension-placeholder";
import styles from "./Tiptap.module.scss";

interface TiptapProps {
	onBlur?: (value: string) => void;
	readonly?: boolean;
	content?: string;
	className?: string;
}

const Tiptap: FC<TiptapProps> = ({className, onBlur, readonly, content}) => {
	const editor = useEditor({
		editable: !readonly,
		extensions: [
			StarterKit.configure({
				code: {HTMLAttributes: {class: styles.code}},
				codeBlock: {HTMLAttributes: {class: styles.code}},
				bulletList: {HTMLAttributes: {class: styles.list}},
				orderedList: {HTMLAttributes: {class: styles.list}}
			}),
			Link.configure({
				HTMLAttributes: {class: styles.link},
				protocols: ["mailto"]
			}),
			CharacterCount.configure({
				limit: 15000
			}),
			Placeholder.configure({
				placeholder: "Your answer",
				emptyEditorClass: styles["is-editor-empty"]
			})
		],
		content,
		editorProps: {
			attributes: {
				class: readonly
					? classNames(styles.readonly, styles["content-text"])
					: classNames(styles.content, styles["content-text"]),
				spellcheck: "false"
			}
		},
		// eslint-disable-next-line @typescript-eslint/no-shadow
		onBlur: ({editor}) => {
			const html = editor.getHTML();
			onBlur?.(html);
		}
	});

	if (readonly) {
		return <EditorContent editor={editor} />;
	}

	return (
		<div className={className}>
			<TiptapMenuBar editor={editor} />
			<EditorContent editor={editor} />
		</div>
	);
};

export default Tiptap;
