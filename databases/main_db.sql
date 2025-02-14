PGDMP     $                     |            main_db    11.2    15.3 5    O           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            P           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            Q           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            R           1262    58312    main_db    DATABASE     ~   CREATE DATABASE main_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_Indonesia.1252';
    DROP DATABASE main_db;
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                User    false            S           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   User    false    7            T           0    0    SCHEMA public    ACL     Q   REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;
                   User    false    7            �            1259    58332 	   job_title    TABLE     x  CREATE TABLE public.job_title (
    id integer NOT NULL,
    name character varying NOT NULL,
    slug character varying NOT NULL,
    created_at timestamp with time zone NOT NULL,
    created_by character varying NOT NULL,
    updated_at timestamp with time zone,
    updated_by character varying,
    deleted_at timestamp with time zone,
    deleted_by character varying
);
    DROP TABLE public.job_title;
       public            postgres    false    7            �            1259    58338    job_title_id_seq    SEQUENCE     �   ALTER TABLE public.job_title ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.job_title_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    196    7            �            1259    58349    menus    TABLE     t  CREATE TABLE public.menus (
    id integer NOT NULL,
    name character varying NOT NULL,
    slug character varying NOT NULL,
    created_at timestamp with time zone NOT NULL,
    created_by character varying NOT NULL,
    updated_at timestamp with time zone,
    updated_by character varying,
    deleted_at timestamp with time zone,
    deleted_by character varying
);
    DROP TABLE public.menus;
       public            postgres    false    7            �            1259    58355    menus_id_seq    SEQUENCE     �   ALTER TABLE public.menus ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.menus_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    7    198            �            1259    58357    permissions    TABLE     z  CREATE TABLE public.permissions (
    id integer NOT NULL,
    name character varying NOT NULL,
    slug character varying NOT NULL,
    created_at timestamp with time zone NOT NULL,
    created_by character varying NOT NULL,
    updated_at timestamp with time zone,
    updated_by character varying,
    deleted_at timestamp with time zone,
    deleted_by character varying
);
    DROP TABLE public.permissions;
       public            postgres    false    7            �            1259    58363    permissions_id_seq    SEQUENCE     �   ALTER TABLE public.permissions ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.permissions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    200    7            �            1259    58365    role_permissions    TABLE     �  CREATE TABLE public.role_permissions (
    id integer NOT NULL,
    menu_id integer NOT NULL,
    permission_id integer NOT NULL,
    role_id integer NOT NULL,
    created_at timestamp with time zone NOT NULL,
    created_by character varying NOT NULL,
    updated_at timestamp with time zone,
    updated_by character varying,
    deleted_at timestamp with time zone,
    deleted_by character varying
);
 $   DROP TABLE public.role_permissions;
       public            postgres    false    7            �            1259    58371    role_permissions_id_seq    SEQUENCE     �   ALTER TABLE public.role_permissions ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.role_permissions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    7    202            �            1259    58373    roles    TABLE     t  CREATE TABLE public.roles (
    id integer NOT NULL,
    name character varying NOT NULL,
    slug character varying NOT NULL,
    created_at timestamp with time zone NOT NULL,
    created_by character varying NOT NULL,
    updated_at timestamp with time zone,
    updated_by character varying,
    deleted_at timestamp with time zone,
    deleted_by character varying
);
    DROP TABLE public.roles;
       public            postgres    false    7            �            1259    58379    roles_id_seq    SEQUENCE     �   ALTER TABLE public.roles ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.roles_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    204    7            �            1259    58381 
   user_roles    TABLE     k  CREATE TABLE public.user_roles (
    id integer NOT NULL,
    user_id integer NOT NULL,
    role_id integer NOT NULL,
    created_at timestamp with time zone NOT NULL,
    created_by character varying NOT NULL,
    updated_at timestamp with time zone,
    updated_by character varying,
    deleted_at timestamp with time zone,
    deleted_by character varying
);
    DROP TABLE public.user_roles;
       public            postgres    false    7            �            1259    58387    user_roles_id_seq    SEQUENCE     �   ALTER TABLE public.user_roles ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.user_roles_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    206    7            �            1259    58389    users    TABLE     �  CREATE TABLE public.users (
    id integer NOT NULL,
    fullname character varying,
    email character varying NOT NULL,
    password character varying NOT NULL,
    created_at timestamp with time zone NOT NULL,
    created_by character varying NOT NULL,
    updated_at timestamp with time zone,
    updated_by character varying,
    deleted_at timestamp with time zone,
    deleted_by character varying,
    job_title_id integer
);
    DROP TABLE public.users;
       public            postgres    false    7            �            1259    58395    users_id_seq    SEQUENCE     �   ALTER TABLE public.users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    7    208            ?          0    58332 	   job_title 
   TABLE DATA           {   COPY public.job_title (id, name, slug, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by) FROM stdin;
    public          postgres    false    196   �C       A          0    58349    menus 
   TABLE DATA           w   COPY public.menus (id, name, slug, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by) FROM stdin;
    public          postgres    false    198   2D       C          0    58357    permissions 
   TABLE DATA           }   COPY public.permissions (id, name, slug, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by) FROM stdin;
    public          postgres    false    200   �D       E          0    58365    role_permissions 
   TABLE DATA           �   COPY public.role_permissions (id, menu_id, permission_id, role_id, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by) FROM stdin;
    public          postgres    false    202   �E       G          0    58373    roles 
   TABLE DATA           w   COPY public.roles (id, name, slug, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by) FROM stdin;
    public          postgres    false    204   F       I          0    58381 
   user_roles 
   TABLE DATA           �   COPY public.user_roles (id, user_id, role_id, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by) FROM stdin;
    public          postgres    false    206   iF       K          0    58389    users 
   TABLE DATA           �   COPY public.users (id, fullname, email, password, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by, job_title_id) FROM stdin;
    public          postgres    false    208   �F       U           0    0    job_title_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.job_title_id_seq', 3, false);
          public          postgres    false    197            V           0    0    menus_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.menus_id_seq', 8, false);
          public          postgres    false    199            W           0    0    permissions_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.permissions_id_seq', 6, true);
          public          postgres    false    201            X           0    0    role_permissions_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.role_permissions_id_seq', 8, true);
          public          postgres    false    203            Y           0    0    roles_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.roles_id_seq', 3, false);
          public          postgres    false    205            Z           0    0    user_roles_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.user_roles_id_seq', 3, false);
          public          postgres    false    207            [           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 3, false);
          public          postgres    false    209            �
           2606    58402    job_title job_title_pk 
   CONSTRAINT     T   ALTER TABLE ONLY public.job_title
    ADD CONSTRAINT job_title_pk PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.job_title DROP CONSTRAINT job_title_pk;
       public            postgres    false    196            �
           2606    58404    job_title job_title_unique 
   CONSTRAINT     U   ALTER TABLE ONLY public.job_title
    ADD CONSTRAINT job_title_unique UNIQUE (slug);
 D   ALTER TABLE ONLY public.job_title DROP CONSTRAINT job_title_unique;
       public            postgres    false    196            �
           2606    58408    menus menus_pk 
   CONSTRAINT     L   ALTER TABLE ONLY public.menus
    ADD CONSTRAINT menus_pk PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.menus DROP CONSTRAINT menus_pk;
       public            postgres    false    198            �
           2606    58410    menus menus_unique 
   CONSTRAINT     M   ALTER TABLE ONLY public.menus
    ADD CONSTRAINT menus_unique UNIQUE (slug);
 <   ALTER TABLE ONLY public.menus DROP CONSTRAINT menus_unique;
       public            postgres    false    198            �
           2606    58412    permissions permissions_pk 
   CONSTRAINT     X   ALTER TABLE ONLY public.permissions
    ADD CONSTRAINT permissions_pk PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.permissions DROP CONSTRAINT permissions_pk;
       public            postgres    false    200            �
           2606    58414    permissions permissions_unique 
   CONSTRAINT     Y   ALTER TABLE ONLY public.permissions
    ADD CONSTRAINT permissions_unique UNIQUE (slug);
 H   ALTER TABLE ONLY public.permissions DROP CONSTRAINT permissions_unique;
       public            postgres    false    200            �
           2606    58416 $   role_permissions role_permissions_pk 
   CONSTRAINT     b   ALTER TABLE ONLY public.role_permissions
    ADD CONSTRAINT role_permissions_pk PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.role_permissions DROP CONSTRAINT role_permissions_pk;
       public            postgres    false    202            �
           2606    58418    roles role_pk 
   CONSTRAINT     K   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT role_pk PRIMARY KEY (id);
 7   ALTER TABLE ONLY public.roles DROP CONSTRAINT role_pk;
       public            postgres    false    204            �
           2606    58420    roles roles_unique 
   CONSTRAINT     M   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_unique UNIQUE (slug);
 <   ALTER TABLE ONLY public.roles DROP CONSTRAINT roles_unique;
       public            postgres    false    204            �
           2606    58422    users user_pk 
   CONSTRAINT     K   ALTER TABLE ONLY public.users
    ADD CONSTRAINT user_pk PRIMARY KEY (id);
 7   ALTER TABLE ONLY public.users DROP CONSTRAINT user_pk;
       public            postgres    false    208            �
           2606    58424    user_roles user_roles_pk 
   CONSTRAINT     V   ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_pk PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.user_roles DROP CONSTRAINT user_roles_pk;
       public            postgres    false    206            �
           2606    58426    users user_unique 
   CONSTRAINT     M   ALTER TABLE ONLY public.users
    ADD CONSTRAINT user_unique UNIQUE (email);
 ;   ALTER TABLE ONLY public.users DROP CONSTRAINT user_unique;
       public            postgres    false    208            �
           2606    58427 *   role_permissions role_permissions_menus_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.role_permissions
    ADD CONSTRAINT role_permissions_menus_fk FOREIGN KEY (menu_id) REFERENCES public.menus(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 T   ALTER TABLE ONLY public.role_permissions DROP CONSTRAINT role_permissions_menus_fk;
       public          postgres    false    202    198    2733            �
           2606    58432 0   role_permissions role_permissions_permissions_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.role_permissions
    ADD CONSTRAINT role_permissions_permissions_fk FOREIGN KEY (permission_id) REFERENCES public.permissions(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 Z   ALTER TABLE ONLY public.role_permissions DROP CONSTRAINT role_permissions_permissions_fk;
       public          postgres    false    2737    202    200            �
           2606    58437 *   role_permissions role_permissions_roles_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.role_permissions
    ADD CONSTRAINT role_permissions_roles_fk FOREIGN KEY (role_id) REFERENCES public.roles(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 T   ALTER TABLE ONLY public.role_permissions DROP CONSTRAINT role_permissions_roles_fk;
       public          postgres    false    2743    204    202            �
           2606    58442    user_roles user_roles_roles_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_roles_fk FOREIGN KEY (role_id) REFERENCES public.roles(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 H   ALTER TABLE ONLY public.user_roles DROP CONSTRAINT user_roles_roles_fk;
       public          postgres    false    2743    204    206            �
           2606    58447    user_roles user_roles_users_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_users_fk FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 H   ALTER TABLE ONLY public.user_roles DROP CONSTRAINT user_roles_users_fk;
       public          postgres    false    2749    208    206            �
           2606    58452    users users_job_title_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_job_title_fk FOREIGN KEY (job_title_id) REFERENCES public.job_title(id) ON DELETE RESTRICT;
 B   ALTER TABLE ONLY public.users DROP CONSTRAINT users_job_title_fk;
       public          postgres    false    2729    208    196            ?   X   x�3�.-H-*-N-�,����Lt�t�L,�M�L��M��9�+�KRs�2K2�*�R+J8c���ˈ�1%73J�mL� ~�*�      A   �   x��α
�0���ݥ%�&;	:�X��&��6ľ����8�����r8#:�`�M���S�	�U9�(�h�7�79���K{}�2����k���# Їp�o�xJ�k���*�er��f��oF�|!�d�����j�&������p����=�i2B�.      C   �   x�3�t���Lb##]C#]#SK+CS+=cSms�����\��̴̒J�Ԋ�?8�2�t.JM,I�L�Pdd�����Y"�6Ą3� �RE�A��.�9�@R ��q�V��p�B(������ ��t�      E   n   x�3�4�4�4�4202�54�52U0��24�20�306�60�,�,.I�u(�,�L��K�(��#.�&�`�	�d ��2/sSf�	0(2��Ӕ2�8�(3 F��� �_~      G   V   x�3�.-H-JL����,F0��Lt�t�L,�M�L��M��9�+�KRs�2K2�*�R+J8c���ˈ�l ����qqq �v+V      I   I   x�3�4B##]C#]#SK+CS+=cSms�����\��̴̒J�Ԋ�?8�2�Cr���qqq �M�      K   ;  x����n�@ E��]��Zf������(�q�Kq���m�n�4�9��s eVE��2�T�����u�B1��ۂ0��{��G�N1�Ǝ�޳�T�D )�'���sG��mG��w_�'�����O������/�F����ʛ�����;kb%�o�ݢJz���R�-�W�;Q���+��Px�!���zˉTٖ$̾���ʧ�� )dqN���K�F.n��ⵎ�Ď�3�7!b���Gg�mEn�z�[����2y��A�,"�e�֋{O
Ts���ܸ�(]>L��̂�-��1�u�	��e�>ui�� � ��     